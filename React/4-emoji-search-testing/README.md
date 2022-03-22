## Emoji Search Test
---
Emoji Search uygulaması için yapılması istenen testleri gerçekleştirdiğim repodur.

#### Gereksinimler
Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.
Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.

`Clipboard test edilebilir değildi.` Bu nedenle EmojiResults.js içerisinde ufak bir değişiklik yapmam gerekti. Kopyalanan içeriği window objesi altınada eklettim. Clipboard erişimi tarayıcı güvenliği açısından sıkıntılı bir durum.
Test işleminde de "Joy" emojisine tıklattıktan sonra `toEqual` ile window.clipboard altındaki değerin eşitliğini kontrol ederek kopyalanıp kopyalanmadığını test etmiş oldum.

```js
componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
    this.clipboard.on("success",function(e){
        window.copyEmoji=e.text;
    });
  }
```

Install
---

`npm install`


Usage
---

`npm start`

Test
---
`npm run test`
