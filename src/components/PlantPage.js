import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantUrl= "http://localhost:6001/plants";

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => { 
    fetch(plantUrl)
    .then(res => res.json())
    .then((data) => {
      setPlants(data);
    })
  }, []);
  
  function onAddPlant(newPlant) { 
    setPlants([...plants, newPlant]);
  } 

  function handleSearch(event) { 
    setSearch((search) => search = event.target.value)
  }

  const plantsToDisplay = plants.filter((plant) => ( 
    plant.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <main>
      <NewPlantForm 
        onAddPlant={onAddPlant}
      />
      <Search 
        handleSearch={handleSearch}
      />
      <PlantList 
        plants={plantsToDisplay}
      />
    </main>
  );
}

export default PlantPage;
