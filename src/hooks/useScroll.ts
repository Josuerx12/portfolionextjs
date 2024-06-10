function handleScrollTo(path: string) {
  const element = document.getElementById(path);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export { handleScrollTo };
