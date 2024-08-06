function getParentComp(ev, className) {
  let linkItem = null;
  /*
        It will check if the clicked item is "header__navitem" class
        If yes then it will event target to linkItem else it will
        go to parent node check for same thing if it is not found that class
        it go two level upword
       */
  if (ev.target.classList.contains(className)) {
    linkItem = ev.target;
  } else {
    if (ev.target.parentNode.classList.contains(className)) {
      linkItem = ev.target.parentNode;
    } else {
      linkItem = ev.target.parentNode.parentNode;
    }
  }
  return linkItem;
}

export default getParentComp;
