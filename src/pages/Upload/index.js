import axios from "axios";
import { useState } from "react";

function Upload() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [images, setImages] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('images', images);
        try{
            const response = await axios.post('http://localhost:8080/api/admin/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                  
            })
            alert(response.data)

        }catch(error){
            console.log(error)
            alert(error.response.data)
        }

    }
    return (
        <div className="grid">
            <div className="grid__row">
                <div className="grid__column-detail-product">
                    <form 
                        style={{textAlign: 'center', marginTop: '20px', fontSize: '2rem'}} 
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="name-product">Tên sản phẩm:</label>
                                <input 
                                    type="text" 
                                    id="name-product" 
                                    name="name-product" 
                                    value={name}
                                    required
                                    onChange={(e) => {setName(e.target.value)}}
                                /><br/>
                                <label htmlFor="description">Mô tả:</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description" 
                                    value={description}
                                    required
                                    onChange={(e) => {setDescription(e.target.value)}}
                                /><br/>
                                <label htmlFor="price">Giá bán</label>
                                <input 
                                    type="number" 
                                    id="price" 
                                    name="price" 
                                    value={price}
                                    required
                                    onChange={(e) => {setPrice(e.target.value)}}
                                /><br/>
                                <label htmlFor="category">Thể loại</label>
                                <input 
                                    type="text" 
                                    id="category" 
                                    name="category" 
                                    value={category}
                                    required
                                    onChange={(e) => {setCategory(e.target.value)}}
                                /><br/>
                                <label htmlFor="images">Hình ảnh:</label>
                                <input 
                                    type="file"
                                    multiple
                                    id="images" 
                                    name="images" 
                                    required
                                    onChange={(e) => {setImages(e.target.files[0])}}
                                /><br/>
                                <button type="submit">Thêm sản phẩm</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Upload;