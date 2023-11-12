import { useState } from "react"


export const SpendForm = ({ addSpend }) => {


    const [spend, setSpend] = useState(
        {
            id: Date.now(),
            name: '',
            price: ''
        }
    )


    const onSubmitForm = (event) => {
        event.preventDefault()
        
        addSpend(spend)
        setSpend({
            id: Date.now(),
            name: '',
            price: ''
        })

    }

    const onInputChange = (inputName, value) => {
        setSpend((prevState) => ({ ...prevState, [inputName]: value }))
    }


    return (
        <form onSubmit={onSubmitForm}>
            <input type="text" value={spend.name} onChange={(event) => onInputChange('name', event.target.value)} />
            <input type="text" value={spend.price} onChange={(event) => onInputChange('price', event.target.value)} />
            <button>Soumettre</button>
        </form>
    )
}