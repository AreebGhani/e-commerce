import React from "react";

export default function Stars({ num }) {
  if (num === 5) {
    return (
      <>
        <i className="mx-1 bi bi-star-fill"></i>
        <i className="mx-1 bi bi-star-fill"></i>
        <i className="mx-1 bi bi-star-fill"></i>
        <i className="mx-1 bi bi-star-fill"></i>
        <i className="mx-1 bi bi-star-fill"></i>
      </>
    );
  } else {
    if (num === 4) {
      return (
        <>
          <i className="mx-1 bi bi-star-fill"></i>
          <i className="mx-1 bi bi-star-fill"></i>
          <i className="mx-1 bi bi-star-fill"></i>
          <i className="mx-1 bi bi-star-fill"></i>
          <i className="mx-1 bi bi-star"></i>
        </>
      );
    } else {
      if (num === 3) {
        return (
          <>
            <i className="mx-1 bi bi-star-fill"></i>
            <i className="mx-1 bi bi-star-fill"></i>
            <i className="mx-1 bi bi-star-fill"></i>
            <i className="mx-1 bi bi-star"></i>
            <i className="mx-1 bi bi-star"></i>
          </>
        );
      } else {
        if (num === 2) {
          return (
            <>
              <i className="mx-1 bi bi-star-fill"></i>
              <i className="mx-1 bi bi-star-fill"></i>
              <i className="mx-1 bi bi-star"></i>
              <i className="mx-1 bi bi-star"></i>
              <i className="mx-1 bi bi-star"></i>
            </>
          );
        } else {
          if (num === 1) {
            return (
              <>
                <i className="mx-1 bi bi-star-fill"></i>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
              </>
            );
          } else {
            return (
              <>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
                <i className="mx-1 bi bi-star"></i>
              </>
            );
          }
        }
      }
    }
  }
}
