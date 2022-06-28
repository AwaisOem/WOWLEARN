let languageData = [
  {
    languageName: "C++",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "C++ Advance",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "Algorithms",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "Android",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "Java",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "PHP",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "SQL",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "MongoDB",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "Python",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "django",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "HTML",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "HTML Advance",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "Css",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
  {
    languageName: "Javascript",
    NumberOflevels: 10,
    Data: [
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:2rem;font-weight:bold;margin-left: 10px;">Intro To C++</span></p>
    <p>At its core, a computer is just a processor with some memory, capable of running tiny 
    instructions like “store 5 in memory location 23459.” Why would we express a program as 
    a text file in a programming language, instead of writing processor instructions?</p>
    <p style="font-weight:bold">advantages:</p>
    <p>. Conciseness: programming languages allow us to express common sequences of commands more concisely. C++ provides some especially powerful shorthands. 
    <br>2. Maintainability: modifying code is easier when it entails just a few text edits, instead 
    of rearranging hundreds of processor instructions. C++ is object oriented, which further improves maintainability. 
    <br>3. Portability: different processors make different instructions available. Programs written as text can be translated into instructions for many different processors; one of 
    C++’s strengths is that it can be used to write programs for nearly any processor</p>
    
    <p>C++ is a high-level language: when you write a program in it, the shorthands are sufficiently 
    expressive that you don’t need to worry about the details of processor instructions. C++ does 
    give access to some lower-level functionality than other languages (e.g. memory addresses).</p>
    <p>C++ is immensely popular, particularly for applications that require speed and/or access 
    to some low-level features. It was created in 1979 by Bjarne Stroustrup, at first as a set 
    of extensions to the C programming language. C++ extends C; our first few lectures will 
    basically be on the C parts of the language. 
    Though you can write graphical programs in C++, it is much hairier and less portable than 
    text-based (console) programs. We will be sticking to console programs in this course. 
    Everything in C++ is case sensitive: someName is not the same as SomeName.</p>
    <p style="font-weight:bold;font-size:2rem;">Hello World</p>
    <code>
    # include < iostream ><br>int main () {<br><br>std :: cout << " Hello , world !\ n ";<br><br>return 0;<br> }
    </code>
    <code>
    1. // indicates that everything following it until the end of the line is a comment: it is 
ignored by the compiler. Another way to write a comment is to put it between /* and 
*/ (e.g. x = 1 + /*sneaky comment here*/ <br>1;). A comment of this form may span 
multiple lines. Comments exist to explain non-obvious things going on in the code. 
Use them: document your code well! <br>
<br>2. Lines beginning with # are preprocessor commands, which usually change what code 
is actually being compiled. #include tells the preprocessor to dump in the contents of 
another file, here the iostream file, which defines the procedures for input/output.<br>
<br>4. <strong>int main()</strong> {...} defines the code that should execute when the program starts up. 
The curly braces represent grouping of multiple commands into a block. More about 
this syntax in the next few lectures.
<br>5.	 • cout << : This is the syntax for outputting some piece of text to the screen. 
<br>• <strong>Namespaces:</strong> In C++, identifiers can be defined within a context – sort of a 
directory of names – called a namespace. When we want to access an identifier 
defined in a namespace, we tell the compiler to look for it in that namespace using 
the scope resolution operator (::). Here, we’re telling the compiler to look for 
cout in the std namespace, in which many standard C++ identifiers are defined. 
<br>A cleaner alternative is to add the following line below line 2: 
using namespace std ;
 
<br>This line tells the compiler that it should look in the std namespace for any 
identifier we haven’t defined. If we do this, we can omit the std:: prefix when 
writing cout. This is the recommended practice. 
<br>• <strong>Strings:</strong> A sequence of characters such as Hello, world is known as a string. A 
string that is specified explicitly in a program is a string literal. 
<br>• <strong>Escape sequences:</strong> The \n indicates a newline character. It is an example of an 
escape sequence – a symbol used to represent a special character in a text literal. 
Here are all the C++ escape sequences which you can include in strings: 
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
      `<p style="margin-top:70px;">Today Letter is <span
            style="color:#F2BB13;font-size:3rem;font-weight:bold;margin-left: 10px;">A</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, expedita! Laudantium architecto quidem,
        eum
        natus sed, vitae reiciendis quisquam necessitatibus incidunt asperiores est. Ipsam eius ipsum esse ut
        commodi neque provident eveniet ipsa odio non, iure est quas maiores expedita similique, praesentium
        adipisci quam quis pariatur quo consectetur corporis consequatur? Incidunt odit inventore eum porro ea
        accusamus, officiis provident, eos quasi nam eius unde fuga similique magnam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum recusandae dolorum eos.
    </p>`,
    ],
  },
];
