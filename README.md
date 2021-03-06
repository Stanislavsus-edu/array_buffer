
[![Build status](https://ci.appveyor.com/api/projects/status/2uxv65v3lwuvqh5c?svg=true)](https://ci.appveyor.com/project/Stanislavsus-edu/array-buffer)

**Легенда**

Периодически данные приходят в бинарном формате и их необходимо преобразовать в какой-либо другой формат, например, строку json, чтобы потом распарсить в объект. Для этих манипуляций в том числе можно использовать объекты, которые предоставляются Web API - ```File``` и ```Blob```, но прямая манипуляция ```ArrayBuffer``` будет в разы быстрее и эффективнее.

**Описание**

У вас есть функция ```getBuffer()```, которая эмулирует создание объекта типа ```ArrayBuffer```. Вам необходимо реализовать класс ArrayBufferConverter с методом ```load()```, который может загружать данные (сигнатура ```load(buffer)```), и методом ```toString```, который умеет переводить содержимое загруженного ```ArrayBuffer``` в строку.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
