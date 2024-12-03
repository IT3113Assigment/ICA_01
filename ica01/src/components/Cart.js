export default function Cart(cartData) {

    console.log(cartData)

    function cal(cartData){
        const total = cartData ? (cartData.cartData.reduce((sum, flower) => sum + (flower.sum || 0), 0)) : (0)
        return total
    }

    const sum=cal(cartData)

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    cartData ? (
                        cartData.cartData.map((flower, index) => (
                            <tr key={index}>
                                <td>{flower.name}</td>
                                <td>{flower.quantity}</td>
                                <td>{flower.sum}</td>
                            </tr>
                        ))
                    ) : (
                        <></>
                    )
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{sum}</td>
                </tr>
            </table>
           
        </div>
    );
}