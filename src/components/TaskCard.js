import { useContext } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
export const TaskCard = observer((id) => {

    const {tasks} = useContext(Context)
    console.log(tasks)

    return(
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>
    )
})