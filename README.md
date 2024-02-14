learnings:
1.uplifintg the state 
2. primitive vs reference memory 
3. as objects and arrays are pointers to values . always go for umutable way for cpying the objects and array
4. for objects we can use object.assign and arrays we can use slice. apart from that ... spread operater works for both
5. every object and array deeply should be destructured and copied .ex 2d array
6. when using setstate , if we are using the prev state to update new state , then always use function to update the state .. otherwise react normally schdules the setstate event. it may cause bugs ... setState((prevState)=>{ return {...prevSatet, updattion}})
7. any image or assesst in public folder will be asessbile normall--> localhost:3000/image .. as builds and development after this public avaible to public but not every folder
