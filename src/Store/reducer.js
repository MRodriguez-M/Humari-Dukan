const initialstate = [];

const reducer = (state = initialstate, action) => {
    

    if (action.type === 'addtocart'){
            console.log([...state,action.payload]);
            const temp = [...state];

            const existingItem = temp.find((item) => {
                if(item.product.id === action.payload.id) {
                    item.quantity += 1;
                }

                return item.product.id === action.payload.id;
            });

            if(existingItem) return ([...temp]);

            const newItem = {quantity: 1, product: action.payload};

            return ([...temp, newItem]);
            
    }
    else if(action.type === 'removefromcart'){
        const temp=[...state];
        temp.splice(action.payload.id,1);
        return ([...temp])
    }
    else
        return state;
}

export default reducer;