## Q.1

> What will be output of ```{count}``` and why?

```javascript
function Comp() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(10);
	}, [])

	useEffect(() => {
	    setCount(1);
	    setCount(2);
	    setCount(3);
	    setCount(4);
	}, [count])

	return (
	<div>{count}</div>
	)
}

```