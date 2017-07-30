# REACT JS TUTORIALS #
LearnCode.academy [playlist of tutorials](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

### REACT JS TUTORIAL #4: State vs Props & Application Data ###
***What are the differences between state and props? How does React handle data?***

*(4:50)* State only gets used if a component has an internal value that only affects that component and doesn't affect any of the rest of the app.  If there's something that affects layout and affects absolutely nothing else, state may be appropriate.  Aside from that, you want to use props. And props are injected into every other component. 

> [props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md): a great summary


**CONCEPT:** No matter how many components change, we're only going to update the DOM with the actual element changes that got created when the entire tree rendered.
