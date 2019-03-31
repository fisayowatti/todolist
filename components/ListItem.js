import React from 'react'

const liContainer = {
    width: "160px",
    height: "150px",
    margin: "20px",
    backgroundColor: "#ffff88",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "10px 10px 15px rgba(215, 215, 215, 0.8)",
}

const liContainerDone = {
    width: "160px",
    height: "150px",
    margin: "20px",
    backgroundColor: "#cccccc",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "10px 10px 15px rgba(215, 215, 215, 0.8)",
    textDecoration: "line-through",
    color: "rgb(0,0,0,0.4)"
}

const contentAreaStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
}

const textStyle = {
    wordWrap: "break-word"
}

const buttonGroupStyle = {
    textAlign: "center",
}

const buttonStyle = {
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
    fontSize: "10px",
    display: "inline-block",
    color: "white"
}

const ListItem = (props) => {

    const { listItem: {id, text, done, editing}, handleEditClick, handleDelete, handleTick, handleChange } = props

    return (
        <div style={done ? liContainerDone : liContainer}>
            { !editing &&
                <div style={contentAreaStyle}>
                    <p style={textStyle}>{text}</p>
                    <div style={buttonGroupStyle}>
                        <button style={{...buttonStyle, backgroundColor: "#8dab7f"}} onClick={() => handleTick(id)}>{done ? "UNDO" : "DO"}</button>
                        { !done && 
                            <span>
                                <button style={{...buttonStyle, backgroundColor: "#587b7f"}} onClick={() => handleEditClick(id)}>EDIT</button>
                                <button style={{...buttonStyle, backgroundColor: "#9b291f"}} onClick={() => handleDelete(id)}>DELETE</button>
                            </span>
                        }
                        
                    </div>
                </div>
            }
            { editing &&
                <div style={contentAreaStyle}>
                    <br/>
                    <input value={text} onChange={(e) => handleChange(id, e.target.value)}/>
                    <button style={{...buttonStyle, backgroundColor: "#587b7f"}} onClick={() => handleEditClick(id)}>UPDATE</button>
                </div>
            }
        </div>
    )
    
}

export default ListItem