import React, {useState} from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({ 
    name: "",
    image: "",
    price: "",
  }); 

  function handleChange(event) { 
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) { 
    event.preventDefault(); 

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(onAddPlant);
  }
  
  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" value={formData.name} 
          onChange= {handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={formData.image} 
          onChange= {handleChange} placeholder="Image URL" />
        <input type="number" name="price" value={formData.price} step="0.01" 
          onChange= {handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
