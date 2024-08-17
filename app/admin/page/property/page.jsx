"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AllProjectCard from "@/components/card/allprojectpage copy/Card"

export default function Property() {
  const [project, setProject] = useState([]);

  useEffect(() => {

    const fetchproject = async () => {
      try {
        const response = await axios.get('/api/project/fetchall');
        setProject(response.data.fetch);
      } catch (error) {
        console.error("Error fetching total properties:", error);
      }
    };

    fetchproject();

  }, []);
  return (
    <>
      {project.map((project, index) => (
        <div key={index}>
          <AllProjectCard projdata={project}/>
        </div>
      ))}


    </>
  )
}
