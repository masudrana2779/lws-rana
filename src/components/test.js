import { useSelector } from "react-redux";

function Test () {
    const count = useSelector((state) => state.value);
    return (
        <p>{count}</p>
    )
}

export default Test