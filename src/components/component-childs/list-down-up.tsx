"use client";
import { useState } from "react";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

interface ListDownUpProps {
  items: FeatureItem[];
}

const ListDownUp = ({ items }: ListDownUpProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      <div className="space-y-4">
        {items.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-lg overflow-hidden rounded-xl mb-4"
          >
            {/* Header Button */}
            <button
              onClick={() => toggleExpand(feature.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none transition-all duration-200 border-b border-gray-100 last:border-b-0 min-h-[90px]"
            >
              <span className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] font-semibold text-gray-800">
                {feature.title}
              </span>
              {expandedItems.has(feature.id) ? (
                <p className="text-black">-</p>
              ) : (
                <p className="text-black">+</p>
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedItems.has(feature.id)
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-2 bg-gray-50 border-b border-gray-100 last:border-b-0">
                <p className="text-gray-700 leading-relaxed text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListDownUp;
