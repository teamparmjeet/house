"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AllProjectCard from "@/components/card/allprojectpage copy/Card"

export default function Property() {
  const [project, setProject] = useState([]);

  useEffect(() => {

    const fetchproject = async () => {
      try {
        const response = await axios.get('/api/project/fetchall/project');
        setProject(response.data.fetch);
      } catch (error) {
        console.error("Error fetching total properties:", error);
      }
    };

    fetchproject();

  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-3 p-3 md:grid-cols-2 gap-2">

        {project.map((project, index) => (
          <div key={index}>
            <AllProjectCard projdata={project} />
          </div>
        ))}
      </div>


    </>
  )
}
