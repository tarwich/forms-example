import { h, Component, render } from 'preact';
import { FormLoader } from './components/form-loader';

// Find any valid script tag. Yes, this will bomb if no valid script tag is
// found, but in principle, this script will only be running if it came from a
// valid script tag
const scriptElement = [
  ...document.querySelectorAll('[src*=--form-example]'),
].find(
  item =>
    !item.nextElementSibling ||
    !item.nextElementSibling.classList.contains('form-example-root')
) as HTMLScriptElement;
const pathToJson = new URL(scriptElement.src).searchParams.get('form');

// Create a root element and insert it after the found script tag
var root = document.createElement('div');
root.className = 'form-example-root';
scriptElement.parentNode.insertBefore(root, scriptElement.nextSibling);

// Finally, render Preact in the created root
render(<FormLoader pathToJson={pathToJson} />, root);
