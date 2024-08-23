"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/Loader/Loading';
export default function SinglePage({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = params.id;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/project/fetch-single/${id}`);
        setProject(response.data.project);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch project data');
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

        </div>
      ) : (
        <p>Project not found!</p>
      )}
    </>
  );
}
