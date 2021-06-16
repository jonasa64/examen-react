import {useState} from 'react'
import Tip from './Tip';
const Tips = () => {
    const foodWastTips = [
        {
            id: 1,
        tip : "Don’t over buy",
        info: "Keep track of what you’ve bought and used. WRAP suggests taking a ‘shelfie’ – a photo of your fridge and cupboards to remind you of what’s there."
    },
        {
            id: 2,
           tip: "Check the use-by dates of fresh food when you buy it.",
            info: "These are the dates to take notice of, rather than the best-before dates. Only buy what you can use before it expires."
        },
        {
            id:3,
            tip: "Plan ahead",
            info: "hink about what you’re going to cook and how you’ll use the leftovers"
        },
        {
            id: 4,
            tip: "Get to know your grocer",
            info: " They will have plenty of advice on how to use up leftovers"
        },
        {
            id: 5,
            tip: "Love your freezer",
            info: "Use your weekends to batch-cook and freeze. There are plenty of freezing tips in our guide."
        }

    ]
    const [tips, setTips] = useState(foodWastTips);
        return(
            <ul className="list-group mt-5">
                {tips && tips.map((tip) => <Tip key={tip.id} tip={tip}/>)}
            </ul>

        )



}

export default Tips;