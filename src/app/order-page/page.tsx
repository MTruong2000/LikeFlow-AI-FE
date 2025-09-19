"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import {
  Search,
  Filter,
  CreditCard,
  Package,
  ChevronDown,
  Zap,
  Bot,
  Sparkles,
  RotateCcw,
} from "lucide-react";

// =====================
// Types matching API
// =====================
interface IUser {
  createdAt: string;
  id: string;
  name: string;
  email: string;
}

interface IPlan {
  createdAt: string;
  id: string;
  name: string;
  plan: "starter" | "grow" | "enterprise" | string;
  type: "subscription" | string;
  interval: "month" | "year" | string;
  intervalCount: number;
  discountedAmountUSD: number;
  discountedAmountVND: number;
  amountUsd: number;
  amountVnd: number;
  discount: number;
  stripePriceId: string;
  active: boolean;
}

export interface IOrder {
  createdAt: string;
  id: string;
  orderCode: string;
  stripeSessionId: string;
  amountUsd: number;
  amountVnd: number;
  paymentStatus: "pending" | "completed" | "failed" | string;
  orderStatus: "processing" | "active" | "cancelled" | string;
  paymentStatusDisplay: string;
  orderStatusDisplay: string;
  user: IUser;
  plan: IPlan;
}

interface IApiResponse {
  code: number;
  status: string;
  message: string;
  data: IOrder[];
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [planFilter, setPlanFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const fetchOrders = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/list-order-user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        signal,
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const json: IApiResponse = await res.json();
      setOrders(Array.isArray(json?.data) ? json.data : []);
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        setError(err?.message || "Failed to load orders.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchOrders(controller.signal);
    return () => controller.abort();
  }, [fetchOrders]);

  // =====================
  // UI helpers
  // =====================
  const getStatusBadge = (status: string, type = "payment") => {
    if (type === "payment") {
      switch (status) {
        case "pending":
          return "bg-amber-500/20 text-amber-400 border-amber-500/30";
        case "completed":
          return "bg-teal-500/20 text-teal-400 border-teal-500/30";
        case "failed":
          return "bg-red-500/20 text-red-400 border-red-500/30";
        default:
          return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      }
    } else {
      switch (status) {
        case "processing":
          return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
        case "active":
          return "bg-teal-500/20 text-teal-400 border-teal-500/30";
        case "cancelled":
          return "bg-red-500/20 text-red-400 border-red-500/30";
        default:
          return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      }
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "starter":
        return "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30";
      case "grow":
        return "bg-gradient-to-r from-teal-500/20 to-blue-600/20 text-teal-400 border-teal-500/30";
      case "enterprise":
        return "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const formatCurrency = (amount: number, currency = "VND") => {
    if (currency === "VND") {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);
    }
    return `$${amount.toFixed(2)}`;
  };

  // =====================
  // Memo: Filter orders
  // =====================
  const filteredOrders = useMemo(() => {
    let filtered = orders;

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.orderCode.toLowerCase().includes(q) ||
          order.plan.name.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.paymentStatus === statusFilter);
    }

    if (planFilter !== "all") {
      filtered = filtered.filter((order) => order.plan.plan === planFilter);
    }

    return filtered;
  }, [orders, searchTerm, statusFilter, planFilter]);

  // =====================
  // Render
  // =====================
  return (
    <div className="min-h-screen bg-gradient-order-page relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(-150deg, #1cf8c8 -40%, #117892 100%)" }}
        />
      </div>

      <div className="relative container mx-auto px-6 py-8 pt-40">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg border border-teal-500/20">
              <Bot className="w-6 h-6 text-teal-400" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Subscription Orders
            </h1>
            <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
          </div>
          <p className="text-gray-400 text-lg">Manage your AI-powered subscription plans and track order history</p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders or plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all backdrop-blur-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const controller = new AbortController();
                  fetchOrders(controller.signal);
                }}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-slate-700/50 hover:border-teal-500/30 transition-all backdrop-blur-sm"
                aria-label="Refresh"
              >
                <RotateCcw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </button>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-slate-700/50 hover:border-teal-500/30 transition-all backdrop-blur-sm"
              >
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Payment Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
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
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
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

        {/* Loading / Error States */}
        {loading && (
          <div className="grid gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl animate-pulse"
              >
                <div className="h-6 w-48 bg-slate-700/50 rounded mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  {Array.from({ length: 4 }).map((__, j) => (
                    <div key={j} className="space-y-2">
                      <div className="h-3 w-24 bg-slate-700/50 rounded" />
                      <div className="h-4 w-40 bg-slate-700/50 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300">
            {error}
          </div>
        )}

        {/* Orders Grid */}
        {!loading && !error && (
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
                  className="p-6 bg-gradient-to-r from-slate-800/40 via-slate-800/30 to-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10 transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg border border-teal-500/20">
                          <Zap className="w-4 h-4 text-teal-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{order.orderCode}</h3>
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
                          <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.paymentStatus, "payment")}`}>
                            {order.paymentStatusDisplay}
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 mb-1">Order Status</p>
                          <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.orderStatus, "order")}`}>
                            {order.orderStatusDisplay}
                          </div>
                        </div>
                      </div>

                      {order.plan.discount > 0 && (
                        <div className="mt-3 p-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-teal-400" />
                            <span className="text-teal-400 font-medium text-sm">
                              {order.plan.discount}% Discount Applied - Saved $
                              {(order.plan.amountUsd - order.plan.discountedAmountUSD).toFixed(2)}
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
        )}

        {/* Stats Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:border-teal-500/20 transition-all">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-teal-400" />
              <div>
                <p className="text-gray-400 text-sm">Total Orders</p>
                <p className="text-white font-semibold">{filteredOrders.length}</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:border-teal-500/20 transition-all">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-teal-400" />
              <div>
                <p className="text-gray-400 text-sm">Active Subscriptions</p>
                <p className="text-white font-semibold">
                  {filteredOrders.filter((o) => o.orderStatus === "active").length}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl backdrop-blur-sm hover:border-teal-500/20 transition-all">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <div>
                <p className="text-gray-400 text-sm">Total Spent</p>
                <p className="text-white font-semibold">
                  ${filteredOrders.reduce((sum, order) => sum + (order.amountUsd || 0), 0).toFixed(2)}
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
