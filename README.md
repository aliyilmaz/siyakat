## siyakat

Bu dizin, Siyakat Şifreleme tekniğinin, dijital verileri şifreleyebilme kabiliyeti kazanmış algoritma ve kullanım örneklerini barındırır.

---

### Algoritma

**Şifreleme Algoritması**
* Veri HEX koduna dönüştürülür
* Miftah for döngüsüne alınır ve HEX kodunun her karakteri Miftah karşılığıyla değiştirilir
* Dönüşmüş değer tekrar hex koduna dönüştürülerek diğer miftahlı işlemlere uygun hale getirilir.

**Çözüm Algoritması**
* Miftah sırası tam tersi yönde değiştirilir.
* Miftah for döngüsüne alınır ve Şifreli parametre Miftah anahtarına dönüştürülmek üzere işlemden geçirilir, bu miftah sayısına bağlı olarak gerçekleştirilir. Her işlemden sonra HEX kodu okunabilir hale dönüştürülür.

---

### Demo:

#### Şifreleme:
https://aliyilmaz.github.io/mind.js/examples/siyakat_encode.html

#### Şifre çözme:
https://aliyilmaz.github.io/mind.js/examples/siyakat_decode.html

---

### Kullanım Örnekleri

* [php](https://github.com/aliyilmaz/siyakat/tree/main/php)
* [javascript](https://github.com/aliyilmaz/siyakat/tree/main/javascript)

---

### Lisans
Bu dizinde bulunan yönerge ve dosyalar **GPL3** lisansı altında paylaşılmıştır.

> Copyright (C) 2021, Ali Yılmaz and contributors 
> 
> This program is free software: you can redistribute it and/or modify
> it under the terms of the GNU General Public License as published by
> the Free Software Foundation, either version 3 of the License, or
> (at your option) any later version.
> 
> This program is distributed in the hope that it will be useful,
> but WITHOUT ANY WARRANTY; without even the implied warranty of
> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
> GNU General Public License for more details.
> 
> You should have received a copy of the GNU General Public License
> along with this program.  If not, see <https://www.gnu.org/licenses/>.
