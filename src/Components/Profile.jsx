import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // Store image URL to display

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      setImageUrl(loggedInUser.profile_picture || ""); // Set the existing image URL if available
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    if (!image) return; // If no image is selected, do nothing

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      // Make an API request to upload the image
      const response = await axios.post("https://Sanse.pythonanywhere.com/api/addproducts/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data); // Log the response to verify the image URL

      // Ensure the image URL is returned and set it in localStorage
      const updatedUser = { ...user, profile_picture: response.data.imageUrl };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setImageUrl(response.data.imageUrl); // Set the URL of the uploaded image
      setLoading(false);

      alert("Profile image uploaded successfully!");
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Profile</h2>

      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {/* Display the user's profile picture */}
      <div>
        {imageUrl ? (
          <img src={imageUrl} alt="Profile" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
        ) : (
          <div>No profile picture</div>
        )}
      </div>

      {/* Image upload section */}
      <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleImageUpload} disabled={loading}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
