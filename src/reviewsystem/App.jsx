import React, { useState } from "react";
import "./style.css";

const productsData = [
  {
    id: 1,
    name:  "Eyeliner",
    description: "Precision eyeliner with a smooth, smudge-proof formula for bold, long-lasting definition. Perfect for creating sharp wings or soft, smoky looks.",
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX///8AAAARAwP8/Pz4+Pj09PRnWVk1JSZXT0+knp0YAAAwICEcDA1SQ0RUTEwdBghsXl7i4uIoGBnc3Nx9cHDo6OgXCAkpFRdENDXQ0NDu7u4IAABOPj8/LzCMf38jFBV1Z2dfUVGShYVVTk6AcnLNyspaS0s9NzfDwMBBMTK2s7KZjY1hU1OOiYpoYmJFPz+Xk5Syra09NTUyLCxkX1+Cf34kJicXFxd4c3M9MTGtp6eil5hbVVQgFxhMRUVybW0kHiA0NTdeYWErLS7aswX6AAAHY0lEQVR4nO3dW3OiyhYH8DReCCBBRQUFERGvyMVEzhAgkL3P9/9Opxs1GmdqP+yC0+UK/5fgPK1frb5aIfP0VKdOnTp16tSpU6dOnTp16tSp86+zoV1A1WkGtCuoOsMX2hVUnfGMdgVV58BMaJdQcQLUo11CxRmgMe0SKo7I7GiXUHGmPEe7hGrT2kou7RqqTU+VIto1VBtZ7S9o11BpWtGWUUCfTDdTnZF02lVUmZ2uMh2lSbuMCuPOt0xHG9Iuo8Lsu1OmI0GeiKopjEZKTLuM6iKze5ZhIO+I+tzcMoygwT18I3ElYCHco+kQieKMGc2UkHYlVWXJtNszhplN32lXUlU4qbvHwo6KaFdSVfK+OT8Joe75L+zgJNSWtEupJk1JHaywcKTyQL/JmCDdPgkVoPf8JRJPwq3g0a6lmhzQ3DgJpxntWqpJwLcLIbPVJZhXRE8yLbGDhVMRtWgXU0kyxXYKoW4imXYxleS9bzurQjhAMDfE1x8hLEapClaoDM5CE6Zw8q7bXXaEhf3VFOKXUUsk7I12IeRFUwP4Xc0GCfOzcCSaEsBTzZ0Q4K9kbK6jtBY+aGrh46cWPn5q4eOnFj5+auHjpxY+fnbfbsDAhfB7OFpBFbZ/jJCvhY+ZHyWEPA/30IXWoM/AFhqxkWmw52Fipwi00HJyD7bQcOLLKH2mXU/5IULHYjvnlQao0DiECw20MHEjH7Rwf3Bs4PPQWCka3Hl4ID2M3RcN7JnmQNbSkCf7IdgesvhME77AFiZOeFlpAL5JWvTQsY/nHsIUdi1TzwvhAKIwJkIuSN9OQoDzsBAmq+gDdg8dsbg9zcEKE44ja+lobgMdpe2DMyAnbx4LgfbQOn+bOIe70jgs0mAL94G71oqVBqow2Y/wUgO4h45lXHYLgEKuONO0j0hDzB6w0PVQlh9h7odcMUr3HsqPaRvkmYYIDcd91rLwCHPHL3rodL21e3ThjlKLS1IUIa8Nd6XZK2jtxznMu0UxSgdb/zPzAAtjzvTRx0cOeJQG4hGlYQTzTBMUa6meI89zLbBCIzksUI5SmKOUCBN3fkS+d4Q7Si3LSBeeGwIWJvnza7p4gXm3KFYaQ8H3Q8TAnYdWHLhZvn4F3EOn+4Z8DvI8jM01ytNjF6wwsbYfaBHkcEcpXkt9lEYRXCGXuORMwwNeS/H98ANsD93Td22LhRcCFibudPSR5W24wpgzUpQfge4WROjEpnt8CYHuFoUw8LxjdnyGuZYW8zAJMvSWewFYoZUMyI4P9Absnm5PCEXHFOZKEyK2vTvgM82rC7SHIXnDcqUwjIaYOcjfTQw1YWXrAmIYxItdkEKkBLbDe9pnvnagCjk7QSFC7jpogxWOD+P4EAIVRkTo5ukxf/MhCZuT4XA4mTQbpx7GXMDtGEDCNmJtW9UQiSAonKHzCNY8fJFWjrUi742OZiqLhYXWXTuAhKJjiVehvRwvx5MFEaa0aysnGRHe9jBXvQyhDE4P/fseusPdbvcZunt4QuYk3EgIvS2fHUhCyxJnV2Eg4WNp+ApHuJ7dCTcveCmN1s6eByJ8xULjVtgdD2UO+c4cSA8b7/dCN/K8yMdCID38XRgfOC5OgQq3+NRmO0YQcFi4giJk74UrHm2WyHchCQ1DvxHqeg9fgWEKO4UwmLwhUEKBjNKbHg52BzeKUljCbz0cBG4UuhkgYf9GOCVCLnHdAAtFSEL7Rmjr+OSthWs4wtm9UOxr5I6PhTBuwM2O8l1oyhNZHrpwetiUbnvYx/OwjfeKD8aH00P+Xhgo+LofAhql90KT48kNeO3qUEbpb8LNEWlcRIRAeshg4UD9EiaD/XIoB8g3wAi1b0JhbuoMXmoYfgtmHmr9e+Hp7yaqYIToxwq3YObhjxDa5lnIQhS2fpbwdpROQQpZwMLOpYer7kWo1sIHyUm4PQtnitieSuRZ67MajLsFFupXYRZsNofg7fPjM4p3YU67uFLyvYeLMfmnv379+s+u8XQAI7zp4WL59NSYEOGh1YQk7P5Z+Dft4krJSTj9kzCGIZxg4eAPwhioMNs0sND/9eu/casVwNgPidBsX4SSpK4E8ufaGCQpCMb/llv08Es4E1Zt9XSmYVUehnD4bZRiYfcq9GkXV0p+iPBrlHaE+ZdQByLs3QnxPJydeyiptIsrJVgofltp5tOTUJh23mkXV0pk0sM9exH2xRvhlHZxpYQIzflF2OnrFyE77bC0iyslhXB/K9yehVswQknFPeSRpmk825np+8tauuUF2sWVkknuecYgzXzfz7K0rzESU7x6gU9tPIz7YXM8loc9efwV/LjEIQ8y7eJKCRH25KtQvjzLYISy3MM9JC6Z8HqEKxdSuUe7uFLSxKZhQSxCnk8f8I8h7eJKSaNH3lvDrFPwh+Hw/NSb0C6ulDSwrzUh7+cVuX7AP4AIsanZwqxzWpdn/LNFu7hy0mo1cVqXXJ+brSbt2soJJjUazWtunhu0aysnjX8I7drKyZnxTQSEVqdOnTp16tSp8//K/wAmyTJMX6d3rgAAAABJRU5ErkJggg==",
    price: 199.99,
    
    likes: 45,
    averageRating: 4.5,
    reviews: [
      { user: "Sophia M", rating: 5, comment:  "Absolutely love this eyeliner! It glides on smoothly and stays put all day without smudging. Perfect for creating sharp wings!" },
      { user: "Emma R", rating: 4, comment: "Great pigmentation and easy to apply. The tip is precise, but I wish it lasted a little longer on oily skin." }
    ]
  },
  {
    id: 2,
    name: "Lipstick",
    description: "Long-lasting, highly pigmented lipstick that glides on smoothly for a bold, vibrant look. Hydrating formula keeps lips soft and comfortable all day.",
    price: 1001.99,
    image:"data:image/jpeg;base64,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",
    likes: 32,
    averageRating: 4.2,
    reviews: [
      { user: "Olivia S", rating: 5, comment: "This lipstick is amazing! The color is rich, long-lasting, and doesn’t dry out my lips. Perfect for all-day wear!" }
    ]
  },
  {
    id: 3,
    name: "Tint",
    description: "Lightweight and buildable tint for lips and cheeks, delivering a natural, dewy flush. Long-lasting, hydrating formula for a fresh, effortless glow.",
    price: 300.99,
    image:"data:image/jpeg;base64,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",
    likes: 55,
    averageRating: 4.7,
    reviews: [
      { user: "MusicBuff", rating: 5, comment: "Perfect for a natural look! This tint blends effortlessly and gives my cheeks a fresh, dewy glow. Love how lightweight it feels!" },
      { user: "Lara M", rating: 4, comment:"Great color payoff and hydration. It lasts for hours, but I wish it was a bit more transfer-proof."  }
    ]
  },
  {
    id: 4,
    name: "Maskara",
    description: "Volumizing and lengthening mascara for bold, defined lashes.",
    price: 229.99,
    image:"data:image/jpeg;base64,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",
    likes: 38,
    averageRating: 4.3,
    reviews: [
      { user: "salena", rating: 5, comment: "Best mascara I've ever used! It adds amazing volume and length without clumping." },
      { user: "Emma", rating: 4, comment: "Great for everyday wear. It gives a natural lift and doesn’t smudge, but I wish it was a bit easier to remove." }
    ]
  }
];

const App = () => {
    const [products, setProducts] = useState(productsData);
    const [newReview, setNewReview] = useState({ rating: 0, comment: "", user: "" });
  
    const handleLike = (id) => {
      setProducts(products.map(product =>
        product.id === id ? { ...product, likes: product.likes + 1 } : product
      ));
    };
  
    const handleAddReview = (id) => {
      if (!newReview.user || !newReview.comment || newReview.rating === 0) {
        alert("Please fill all review fields");
        return;
      }
  
      setProducts(products.map(product =>
        product.id === id ? {
          ...product,
          reviews: [...product.reviews, newReview],
          averageRating: calculateAverageRating([...product.reviews, newReview])
        } : product
      ));
  
      setNewReview({ rating: 0, comment: "", user: "" });
    };
    const calculateAverageRating = (reviews) => {
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
      };
    
      // Sort products by likes in descending order
      const sortedProducts = [...products].sort((a, b) => b.likes - a.likes);
    
      return (
        <div className="container">
          <h1>Product Review System</h1>
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <p className="likes">Likes: {product.likes}</p>
              <button className="like-button" onClick={() => handleLike(product.id)}>Like</button>
              <p className="rating">Average Rating: {product.averageRating}</p>
              <h3>Reviews:</h3>
              <ul className="review-list">
                {product.reviews.map((review, index) => (
                  <li key={index} className="review-item">
                    {review.user}: {"⭐".repeat(review.rating)} {review.comment}
                  </li>
                ))}
              </ul>
              <div className="review-form">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={newReview.user} 
                  onChange={(e) => setNewReview({ ...newReview, user: e.target.value })} 
                />
                <input 
                  type="number" 
                  min="1" 
                  max="5" 
                  placeholder="Rating" 
                  value={newReview.rating} 
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })} 
                />
                <textarea 
                  placeholder="Write a review" 
                  value={newReview.comment} 
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} 
                />
                <button 
                  className="submit-review" 
                  onClick={() => handleAddReview(product.id)}
                >
                  Submit Review
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default App;        
  