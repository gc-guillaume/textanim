# textAnim.js

**Dumb, lightweight & class-based text animations.**

`textAnim.js` is a minimalistic JavaScript library designed to add elegant, fluid text animations to your website with ease. With just 1kb of vanilla JS and 5kb of CSS, you can bring life to your text elements using a simple, class-based approach.

![Logo de textAnim.js](https://i.ibb.co/SB53TsT/textanim.gif)

## Why It's Cool

- **31** elegant and fluid text animations, ready to run on any website.
- **3** simple classes to learn: `split`, `repeat`, and `delay`.
- **1kb** of Vanilla JS.
- **4kb** of CSS for animations, making it lightweight and fast.

## How to Use

### Option 1: Use a CDN (Recommended)

This is the easiest way to get started with `textAnim.js`. Simply copy and paste the required lines into your HTML file, add your first class to a text element, and watch the magic happen!

`<link rel="stylesheet" href="https://cdn.statically.io/gh/gc-guillaume/textanim/master/animations.min.css">`

`<script src="https://cdn.statically.io/gh/gc-guillaume/textanim/master/animations.min.js"></script>`


### Option 2: Download and Customize

If you'd like to tinker with the source code or create your own CSS animations, download the library as a zip file. Inside, you'll find the source code and a demo file to help you get started.

## Available Classes

Once `textAnim.js` is installed, you can use the following classes on any HTML text element. All classes can be combined in the same element.

| Class                      | Requirement | Description                                                                                  | Code Example                                              |
|----------------------------|-------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `txt-anime-{animation}`     | Required    | This class triggers the scroll animation. Choose from 31 different animations in the demo.   | `<p class="txt-anime-slide-up">Example</p>`               |
| `txt-delay-{milliseconds}`  | Optional    | Adds an animation delay in milliseconds. Useful for sequential animations.                   | `<p class="txt-anime-slide-up txt-delay-400">This text will appear after 400ms</p>` |
| `txt-split`                 | Optional    | Animates text letter by letter, wrapping each letter in a span to avoid line break issues.   | `<p class="txt-anime-slide-up txt-split">This text will appear letter by letter!</p>` |
| `txt-repeat`                | Optional    | Repeats the animation each time the text is visible in the viewport.                         | `<p class="txt-anime-slide-up txt-repeat">This text will animate every time it comes into view.</p>` |

## Documentation

For detailed usage examples and to see all available animations in action, check out the [demo page](./textanim_demo.html).

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

