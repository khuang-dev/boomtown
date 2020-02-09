const styles = ({ theme }) => {
    return {
        shareformcontainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "450px",
        },
        nameinput: {
            marginTop: "30px",
        },
        descriptioninput: {
            marginTop: "15px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "500px"
        },
        title: {
            fontSize: "45px",
            lineHeight: 1,
            fontWeight: "bold",
            marginTop: "10px",
            marginBottom: "50px"
        },
        button: {
            background: "#f9a825",
        },
        share: {
            background: "#f9a825",
            textTransform: "uppercase",
            border: "none",
            width: 150,
        },
        tagscontainer: {
            margin: "20px 0"
        },
        require: {
            height: "20px",
            color: "#f9a825"
        }
    }
}

export default styles;