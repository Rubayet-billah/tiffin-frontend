const FeaturedContent = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Content Items */}
          <div className="p-4 bg-gray-200 shadow-md rounded">
            <img
              src="food-image-1.jpg"
              alt="Featured Food Item"
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Food Item 1</h3>
              <p className="text-gray-700">
                Description of the featured food item. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Repeat this structure for additional featured items */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
