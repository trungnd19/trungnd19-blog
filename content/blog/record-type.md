---
draft: false
toc: true
publishedAt: 2024-02-12
title: "Giới thiệu về Record Type trong TypeScript"
description: "Làm thế nào để define type 1 object trong TypeScript?"
---

# Giới thiệu về Record Type trong TypeScript

Để define type của một object trong TypeScript, ta có thể dùng object type:

```javascript
interface SalaryInterface {
  annual: number
  bonus: number
}
const salary: SalaryInterface = { annual: 56000, bonus: 1200 } // OK
```

Hoặc cách khác là dùng index signature:

```javascript
type NumericObject = {
  [key: string]: number,
};
const salary: NumericObject = { annual: 56000, bonus: 1200 }; // OK
```

Đây là những cách thông dụng để define object types.
Ngoài hai cách kể trên, ta có thể dùng Record<K, V> type. Cách này có điểm mạnh là ngắn gọn, khiến code dễ đọc hơn.

## 1. Record Type

Record<K, V> là generic type thể hiện type của một object có keys là K và values là V.
Ví dụ Record<string, number> là object type với keys là string, values là number.

```javascript
type NumericRecord = Record<string, number>;
const salary: NumericRecord = { annual: 56000, bonus: 1200 }; // OK
```

Với Record<string, number>, chỉ cần các keys đều là string và các values đều là number thì TypeScript sẽ không báo lỗi:

```javascript
type NumericRecord = Record<string, number>;
const salary1: NumericRecord = { annual: 56000 }; // OK
const salary2: NumericRecord = { monthly: 8000 }; // OK
const salary3: NumericRecord = {}; // OK
const salary4: NumericRecord = { foo: 0, bar: 1, baz: -2 }; // OK
```

TypeScript sẽ báo lỗi nếu bạn sử dụng Record<string, number> mà value lại là string:

```javascript
type NumericRecord = Record<string, number>;
const salary2: NumericRecord = { annual: "56K" }; // Type error!
```

Có 2 quy tắc đơn giản cần nhớ liên quan đến các type hợp lệ của keys và values nếu ta sử dụng Record<K, V>:

- Type K của key sẽ chỉ được phép là string, number, symbol hoặc literals type
- Type V của value thì không có giới hạn, có thể là bất kì type gì.

```javascript
type T1 = Record<string, string>; // OK
type T2 = Record<number, number>; // OK
type T3 = Record<string, () => void>; // OK
type T4 = Record<number | "key1", boolean>; // OK
type T5 = Record<"key1" | "key2", boolean>; // OK
type T6 = Record<string, Record<string, number>>; // OK
type T7 = Record<string, { payment: number }>; // OK
```

Type K của key không được phép là boolean, object hay Function

```javascript
type T1 = Record<boolean, number>; // Type error!
type T2 = Record<object, number>; // Type error!
```

## 2. Record với union key

Như ví dụ trên, Record<string, number> cho phép key có thể mang mọi giá trị, miễn là thuộc type string (ví dụ ‘abc’, ‘xyz’, ‘cde’, … đều là những key hợp lệ với Record<string, number>). Tuy nhiên trong thực tế, có rất nhiều trường hợp chúng ta cần giới hạn những giá trị keys cụ thể mà object có thể mang.
Để nêu rõ những giá trị hợp lên của keys, chúng ta sẽ dùng union type.

```javascript
type Keys = "key1" | "key2" | "keyN";
```

Ví dụ, Record<’annual’ | ‘bonus’, number> thể hiện một object chỉ được có 2 keys là ‘annual’ và ‘bonus’

```javascript
type Salary = Record<"annual" | "bonus", number>;
const salary1: Salary = { annual: 56000, bonus: 1200 }; // OK
```

TypeScript sẽ báo lỗi nếu ta dùng nhiều key hơn/ ít key hơn, hoặc dùng một key không khai báo trong union type:

```javascript
type Salary = Record<"annual" | "bonus", number>;
const salary1: Salary = { annual: 56000 }; // Type error!
const salary2: Salary = { bonus: 1200 }; // Type error!
const salary3: Salary = {}; // Type error!
const salary4: Salary = { monthly: 8000 }; // Type error!
```

Cách viết Record type với union keys tương đương với cách dùng object type thông thường, nhưng ngắn gọn hơn, không bị lặp code:

```javascript
type Salary = Record<'annual' | 'bonus', number>
// is equivalent to
type SalaryObj = {
  annual: number
  bonus: number
}
```

## 3. Lợi ích của việc dùng Record Type

Cá nhân tôi thích dùng record type hơn là index signature bởi record type khiến code ngắn gọn và dễ hiểu hơn.

```javascript
function logSalary1(salary: Record<string, number>) {
  console.log(salary);
}

function logSalary2(salary: { [key: string]: number }) {
  console.log(salary);
}
```

Ngoài ra, khác với Record, index signature không nhận literals hay union là type của key

```javascript
type Salary = {
  [key: "annual" | "bonus"]: number, // Type error!
};
```

## 4. Kết luận

Record<K, V> là cách để khai báo type của một object, với type của key là K, và type của value là V.
Type K của key có thể là number, string hoặc symbol. Type V có value có thể là bất kì type gì hợp lệ.
Trường hợp cần nêu cụ thể những giá trị mà key có thể mang, ta có thể dùng union type kết hợp với literal type.
