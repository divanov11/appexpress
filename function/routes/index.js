import appexpress from '@itznotabug/appexpress';

const router = new appexpress.Router();

// index content.
const indexContent =
    '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AppExpress</title><style>@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);html{height:100%;margin:0;padding:0}body{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;margin:0;background:linear-gradient(135deg,#000,#f02e65);font-family:Roboto,sans-serif;color:#fff;overflow:auto}.container{text-align:center;max-width:600px;padding:20px}.logo{font-size:3rem;font-weight:700;color:inherit}.slogan{font-size:1.2rem;margin-top:20px;line-height:1.75}.action-button{margin-top:40px;padding:12px 24px;font-size:1.1rem;border:2px solid #fff;background-color:transparent;color:#fff;cursor:pointer;transition:all .3s ease;outline:0;border-radius:25px}.action-button:hover{background-color:#fff;color:#000}footer{text-align:center;padding:20px 0;position:absolute;bottom:0;width:100%;font-size:.8rem}footer a{color:#fff}</style></head><body><div class="container"><div class="logo">AppExpress</div><div class="slogan">An<code style="font-size:16px">`express.js`</code>like framework for<br>Appwrite Functions, enabling super-easy navigation!</div><button class="action-button" onclick="learnMore()">Learn More</button></div><footer>Built by<a href="https://github.com/itznotabug" target="_blank">@ItzNotABug</a><p>This is rendered from a raw html string.</p></footer><script>function learnMore(){window.open("https://github.com/itznotabug/appexpress","_blank")}</script></body></html>';

router.get('/', async (request, response) => {
    const { html } = request.query;
    if (html === 'true') {
        await response.htmlFromFile('index.html');
    } else response.html(indexContent);
});

router.post('/', (request, response) => {
    response.json({ message: 'great! you did a post request.' });
});

export default router;
