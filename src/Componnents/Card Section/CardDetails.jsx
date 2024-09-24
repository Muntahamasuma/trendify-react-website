

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 my-5 md:my-10">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src="https://i.ibb.co.com/FnjXDhS/image.png" alt="Card 1" className="rounded-t-lg" />
        <h3 className="text-lg font-semibold mt-2">Summer Collection</h3>
        <p className="text-gray-700">Explore our vibrant summer wear collection to keep you cool and stylish all season long.</p>
      </div>
      
      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src="https://i.ibb.co.com/xfGdbnk/image.png" alt="Card 2" className="rounded-t-lg" />
        <h3 className="text-lg font-semibold mt-2">Men&lsquo;s Casual</h3>
        <p className="text-gray-700">Shop our latest range of men&lsquo;s casual wear, perfect for a laid-back weekend look.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src="https://i.ibb.co.com/cvb4GkW/image.png" alt="Card 3" className="rounded-t-lg" />
        <h3 className="text-lg font-semibold mt-2">Women&lsquo;s Dresses</h3>
        <p className="text-gray-700">Discover our range of trendy and elegant dresses for every special occasion.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src="https://i.ibb.co.com/mv70r62/image.png" alt="Card 4" className="rounded-t-lg" />
        <h3 className="text-lg font-semibold mt-2">Accessories</h3>
        <p className="text-gray-700">Elevate your style with our collection of statement bags, shoes, and more.</p>
      </div>
    </div>
  );
};

export default CardSection;