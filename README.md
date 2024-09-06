# textAnim.js

**Dumb, lightweight & class-based text animations.**

`textAnim.js` is a minimalistic JavaScript library designed to add elegant, fluid text animations to your website with ease. With just 2kb of vanilla JS and 5kb of CSS, you can bring life to your text elements using a simple, class-based approach.

![Logo de textAnim.js](https://i.ibb.co/SB53TsT/textanim.gif)

## Why It's Cool

- **31** elegant and fluid text animations, ready to run on any website.
- **3** simple classes to learn: `split`, `repeat`, and `delay`.
- **2kb** of Vanilla JS.
- **4kb** of CSS for animations, making it lightweight and fast.

## How to Use

### Option 1: Use a CDN (Recommended)

This is the easiest way to get started with `textAnim.js`. Simply copy and paste the required lines into your HTML file, add your first class to a text element, and watch the magic happen!

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gc-guillaume/textanim/animations.min.css">`

`<script src="https://cdn.jsdelivr.net/gh/gc-guillaume/textanim/animations.min.js"></script>`


### Option 2: Download and Customize

If you'd like to tinker with the source code or create your own CSS animations, download the library as a zip file. Inside, you'll find the source code and a demo file to help you get started.

## Usage

Once `textAnim.js` is installed, you can use the following classes on any HTML text element. All classes can be combined in the same element.

| Class                                     | Requirement | Description                                                                                                  | Code Example                                                                 |
|-------------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| `textanim-{animation}`                    | Required    | This class triggers the scroll animation. You can choose from 31 different animations in the demo.            | `<p class="textanim-slide-up">Example</p>`                                    |
| `textanim-{animation}-{milliseconds}`     | Optional    | Adds an animation delay in milliseconds. Useful for sequential animations. Must be placed just after "{animation}".                                   | `<p class="textanim-slide-up-400">This text will appear after 400ms</p>`      |
| `textanim-{animation}-split`              | Optional    | Animates text letter by letter, wrapping each letter in a span to avoid line break issues.                    | `<p class="textanim-slide-up-400-split">This text will appear letter by letter!</p>` |
| `textanim-{animation}-repeat`             | Optional    | Repeats the animation each time the text is visible in the viewport.                                          | `<p class="textanim-slide-up-400-split-repeat">This text will animate every time it comes into view.</p>` |


## Documentation

For detailed usage examples and to see all available animations in action, check out the [demo page](./textanim_demo.html).

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

