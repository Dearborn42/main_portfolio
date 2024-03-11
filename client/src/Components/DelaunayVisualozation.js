import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3-delaunay';
import * as THREE from 'three';

function DelaunayVisualization({ array }) {
  const groupRef = useRef();

  useEffect(() => {
    if (array.length < 2) return;

    // Sort points based on distance from the origin
    const sortedPoints = array.sort((a, b) => {
      const distA = a.x * a.x + a.y * a.y + a.z * a.z;
      const distB = b.x * b.x + b.y * b.y + b.z * b.z;
      return distA - distB;
    });

    const delaunay = d3.Delaunay.from(sortedPoints, (d) => d.x, (d) => d.y);
    const linesGeometry = new THREE.BufferGeometry();
    const positions = [];

    // Create lines between each point and its neighbors
    for (let i = 0; i < sortedPoints.length; i++) {
      const neighbors = delaunay.neighbors(i);
      const pointA = sortedPoints[i];
      for (const neighborIndex of neighbors) {
        if (neighborIndex > i) {
          const pointB = sortedPoints[neighborIndex];
          positions.push(pointA.x, pointA.y, pointA.z, pointB.x, pointB.y, pointB.z);
        }
      }
    }

    // Set geometry attributes
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // Create material
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });

    // Create lines
    const lines = new THREE.LineSegments(linesGeometry, material);

    // Add lines to the scene
    groupRef.current.add(lines);
  }, [array]);

  return <group ref={groupRef} />;
}

export default DelaunayVisualization;
