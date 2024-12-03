export default function Cart(cartData) {
    
    function cal(cartData){
        const total = cartData ? (cartData.reduce((sum, flower) => sum + (flower.sum || 0), 0)) : (0)
        return total
    }

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
                    
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>Grand Total</td>
                </tr>
            </table>
           
        </div>
    );
}