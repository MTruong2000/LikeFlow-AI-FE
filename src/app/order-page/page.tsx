"use client";
import { useState, useMemo } from 'react';
import { Search, Filter, CreditCard, Package, ChevronDown, Zap, Bot, Sparkles } from 'lucide-react';

// Mock data based on the API response
const mockOrdersData = {
  "code": 200,
  "status": "success",
  "message": "Processed successfully",
  "data": [
    {
      "createdAt": "09:14:02 15/09/2025",
      "id": "7f000001-994b-16f4-8199-4ca71a1a0015",
      "orderCode": "LF-20250915-D76948",
      "stripeSessionId": "cs_test_b1YQLRoTHmp7mHBjWigKfVStr0ZVlQwuq7aJfTMKOHR3758MzSUSsNgV7v",
      "amountUsd": 20.00,
      "amountVnd": 527849.33,
      "paymentStatus": "pending",
      "orderStatus": "processing",
      "paymentStatusDisplay": "Chờ thanh toán",
      "orderStatusDisplay": "Đang xử lý",
      "user": {
        "createdAt": "07:09:46 15/09/2025",
        "id": "7f000001-994b-16f4-8199-4c354fa00014",
        "name": "Test Data",
        "email": "truong29102000@gmail.com"
      },
      "plan": {
        "createdAt": "22:07:42 14/09/2025",
        "id": "143d1d1d-72eb-4d22-adde-4fcf4b38509a",
        "name": "Starter 1 month",
        "plan": "starter",
        "type": "subscription",
        "interval": "month",
        "intervalCount": 1,
        "discountedAmountUSD": 20.00,
        "discountedAmountVND": 527849.330,
        "amountUsd": 20.00,
        "amountVnd": 527849.330,
        "discount": 0,
        "stripePriceId": "price_1S6061CEfu9GSyHeZflQGPxI",
        "active": true
      }
    },
    {
      "createdAt": "09:35:49 15/09/2025",
      "id": "7f000001-994b-16f4-8199-4cbb06f30018",
      "orderCode": "LF-20250915-13A65B",
      "stripeSessionId": "cs_test_b1sTkQF5Z9BOxWxaQzctbU5yyHwKg8ZwjZ7f1L5xcIcBSKbophFn7Wj8bf",
      "amountUsd": 40.00,
      "amountVnd": 1055698.66,
      "paymentStatus": "completed",
      "orderStatus": "active",
      "paymentStatusDisplay": "Đã thanh toán",
      "orderStatusDisplay": "Đang hoạt động",
      "user": {
        "createdAt": "07:09:46 15/09/2025",
        "id": "7f000001-994b-16f4-8199-4c354fa00014",
        "name": "Test Data",
        "email": "truong29102000@gmail.com"
      },
      "plan": {
        "createdAt": "22:07:42 14/09/2025",
        "id": "ac3c8b0d-eb95-45ad-8c13-77d4724cc6ae",
        "name": "Grow 1 month",
        "plan": "grow",
        "type": "subscription",
        "interval": "month",
        "intervalCount": 1,
        "discountedAmountUSD": 40.00,
        "discountedAmountVND": 1055698.660,
        "amountUsd": 40.00,
        "amountVnd": 1055698.660,
        "discount": 0,
        "stripePriceId": "price_1S607DCEfu9GSyHezUhYEPkQ",
        "active": true
      }
    },
    {
      "createdAt": "09:47:15 15/09/2025",
      "id": "7f000001-994b-16f4-8199-4cc5800a0019",
      "orderCode": "LF-20250915-BD6FB2",
      "stripeSessionId": "cs_test_a1gAO0dmZHrngYbdYc1NKtizAuLhfXIGVh9cUVZ58GcR25UCWtvaoMYElS",
      "amountUsd": 384.00,
      "amountVnd": 10134707.14,
      "paymentStatus": "completed",
      "orderStatus": "active",
      "paymentStatusDisplay": "Đã thanh toán",
      "orderStatusDisplay": "Đang hoạt động",
      "user": {
        "createdAt": "07:09:46 15/09/2025",
        "id": "7f000001-994b-16f4-8199-4c354fa00014",
        "name": "Test Data",
        "email": "truong29102000@gmail.com"
      },
      "plan": {
        "createdAt": "22:07:42 14/09/2025",
        "id": "f8b22c9e-e55f-4b59-8f3b-bdd143c0eaa2",
        "name": "Grow 1 year",
        "plan": "grow",
        "type": "subscription",
        "interval": "year",
        "intervalCount": 1,
        "discountedAmountUSD": 384.00,
        "discountedAmountVND": 10134707.140,
        "amountUsd": 480.00,
        "amountVnd": 12668383.920,
        "discount": 20,
        "stripePriceId": "price_1S60C6CEfu9GSyHeOil9BA4e",
        "active": true
      }
    }
  ]
};

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Get status badge style
  const getStatusBadge = (status: string, type = 'payment') => {
    if (type === 'payment') {
      switch (status) {
        case 'pending':
          return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
        case 'completed':
          return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
        case 'failed':
          return 'bg-red-500/20 text-red-400 border-red-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    } else {
      switch (status) {
        case 'processing':
          return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        case 'active':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'cancelled':
          return 'bg-red-500/20 text-red-400 border-red-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    }
  };

  // Get plan badge style
  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case 'starter':
        return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'grow':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30';
      case 'enterprise':
        return 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Filter orders
  const filteredOrders = useMemo(() => {
    let filtered = mockOrdersData.data;

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.orderCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.plan.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.paymentStatus === statusFilter);
    }

    if (planFilter !== 'all') {
      filtered = filtered.filter(order => order.plan.plan === planFilter);
    }

    return filtered;
  }, [searchTerm, statusFilter, planFilter]);

  const formatCurrency = (amount: number, currency = 'VND') => {
    if (currency === 'VND') {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(amount);
    }
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="pt-[68px] min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-0 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/20">
              <Bot className="w-6 h-6 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              AI Subscription Orders
            </h1>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-400 text-lg">Manage your AI-powered subscription plans and track order history</p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4">
          {/* Search and Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders or plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-slate-700/50 transition-all backdrop-blur-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Payment Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Plan Type</label>
                <select
                  value={planFilter}
                  onChange={(e) => setPlanFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="all">All Plans</option>
                  <option value="starter">Starter</option>
                  <option value="grow">Grow</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Orders Grid */}
        <div className="grid gap-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-800/50 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No orders found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="p-6 bg-gradient-to-r from-slate-800/40 via-slate-800/30 to-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:border-slate-600/50 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Order Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {order.orderCode}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPlanBadge(order.plan.plan)}`}>
                        {order.plan.name}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400 mb-1">Created</p>
                        <p className="text-white font-medium">{order.createdAt}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Amount</p>
                        <div>
                          <p className="text-white font-medium">${order.amountUsd}</p>
                          <p className="text-gray-400 text-xs">{formatCurrency(order.amountVnd)}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Payment Status</p>
                        <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.paymentStatus, 'payment')}`}>
                          {order.paymentStatusDisplay}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Order Status</p>
                        <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.orderStatus, 'order')}`}>
                          {order.orderStatusDisplay}
                        </div>
                      </div>
                    </div>

                    {/* Discount Info */}
                    {order.plan.discount > 0 && (
                      <div className="mt-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-medium text-sm">
                            {order.plan.discount}% Discount Applied - Saved ${(order.plan.amountUsd - order.plan.discountedAmountUSD).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-gray-400 text-sm">Total Orders</p>
                <p className="text-white font-semibold">{filteredOrders.length}</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-gray-400 text-sm">Active Subscriptions</p>
                <p className="text-white font-semibold">
                  {filteredOrders.filter(o => o.orderStatus === 'active').length}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-gray-400 text-sm">Total Spent</p>
                <p className="text-white font-semibold">
                  ${filteredOrders.reduce((sum, order) => sum + order.amountUsd, 0).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;