# JS Image Slider

Proyek ini adalah sebuah slider gambar yang dibuat menggunakan JavaScript.

## Fitur
- Navigasi gambar dengan tombol panah
- Mendukung berbagai format gambar

## Tampilan
![Pratinjau Slider](test.png)

## Importan!!
isi ke file css

```bash
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    overflow: hidden;
    margin: 0;
    font-family: Arial, sans-serif;
}

/* Container */
.slider {
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
.slides {
    display: flex;
    width: 400%;
    transition: transform 0.8s ease-in-out;
}
/* IMG SLIDE */
.slides img {
    width: 25%;
}

/* Button */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 15px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 20px;
    transition: background-color 0.3s ease;
}
.prev:hover, .next:hover {
    background-color: blueviolet;
}
.prev { left: 20px; }
.next { right: 20px; }
```
