import React, { useState } from 'react';

const UploadMeal: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement image upload and calorie calculation
    console.log('Image uploaded:', image);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">食事をアップロード</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="meal-image" className="block mb-2">食事の写真:</label>
          <input
            type="file"
            id="meal-image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
        {preview && (
          <div>
            <img src={preview} alt="Preview" className="max-w-xs mx-auto" />
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          アップロード
        </button>
      </form>
    </div>
  );
};

export default UploadMeal;