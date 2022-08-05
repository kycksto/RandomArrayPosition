Problem with this version:
  -onClick event on mesh doesnt get the first index ([0]) instead triggering all the index in the raycast input result
    example: clicking 3 box align on each other will trigger all the object onclick event instead of the object clicked
    
  -although each BoxMesh have individual event, it is still not achieve the final goal that is to have each BoxMesh have their individual href either by inherit from the App Component array object or manually input on the BoxMesh Props
    example: all of the object onClick event still open the same href
