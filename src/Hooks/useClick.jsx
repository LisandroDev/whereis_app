function useClick(x, y) {
  const coordsTortuga = {
    minX: 897,
    maxX: 1075,
    y: 908,
  };
  if (x < coordsTortuga.maxX && x > coordsTortuga.minX && y > 570 && y < 713) {
    console.log("tortuga");
  }
}

export default useClick;
