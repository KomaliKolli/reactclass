


export const Tablecompoent=()=>{

    const details={
        thitems:["University","Branch","Percentage/CGPA"],
        tditems:["Narayana Engineering College","B-tech(CSE)","87%"],
        tditems1:["Narayana Junior College","MPC","96%"],
        tditems2:["Good Shepherd E.M School","SSC","10.00CGPA"]
    }
    var {thitems,tditems,tditems1,tditems2} = details
    
    return(
        <table>
        <tr>
            <th>{thitems[0]}</th>
            <th>{thitems[1]}</th>
            <th>{thitems[2]}</th>
        </tr>
            <tr>
                <td>{tditems[0]}</td>
                <td>{tditems[1]}</td>
                <td>{tditems[2]}</td>    
            </tr>
            <tr>
            <td>{tditems1[0]}</td>
            <td>{tditems1[1]}</td>
            <td>{tditems1[2]}</td> 
            </tr>
            <tr>
            <td>{tditems2[0]}</td>
            <td>{tditems2[1]}</td>
            <td>{tditems2[2]}</td> 
            </tr>
        </table>
    );





}