const Itemlist = ({children}) => {
    return(
        <div
        style={{
            display: 'flex',
            padding: "10 px 25 px",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
        }}
        >
            {children}
         </div>
  );
};

export default Itemlist