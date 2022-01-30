const DOC_TITLE = document.title;

function RandomCounter({ 
  min = 10, 
  max = 100, 
  fps = 1000 / 60, 
  onComplete 
}) {
  
  const [MAX_COUNT] = React.useState(getRandomCount(min, max));

  React.useEffect(
    () => (document.title = `(${MAX_COUNT}) ${DOC_TITLE}`),
    [MAX_COUNT]
  );

  const [count, setCount] = React.useState(0);

  let isComplete = count >= MAX_COUNT;

  React.useEffect(() => {
    let clearId = setTimeout(() => {
      if (!isComplete) setCount((count) => count + 1);
      else onComplete?.();
    }, fps);

    return () => clearTimeout(clearId);
  }, [count]);

  return (
    <output
      className="randomCounter"
      style={!isComplete ? null : { animationName: 'none' }}
    >
      {count}
    </output>
  );
}
