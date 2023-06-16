"use client";
import CategoryItem from "./CategoryItem";
import { CategoryData } from "./CategoryData";

export default function CategoryList() {
  return (
    <div className="pb-12 bg-slate-900">
      <div className="grid grid-cols-2 gap-2 px-2 py-4">
        {CategoryData.map(({ id, title, icon, path, imageUrl }) => (
          <CategoryItem
            key={id}
            title={title}
            icon={icon}
            path={path}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
}