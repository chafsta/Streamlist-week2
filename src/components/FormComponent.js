function FormComponent() {;
   <form>
    <label>  
        <input type="text" />
    </label>
   </form> 
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render (<FormComponent />);
