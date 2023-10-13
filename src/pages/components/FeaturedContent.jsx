import ItemCard from "../../components/ui/ItemCard";
import { foodItems } from "../../constants/constants";

const FeaturedContent = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Content Items */}
          {foodItems.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}

          {/* Repeat this structure for additional featured items */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
