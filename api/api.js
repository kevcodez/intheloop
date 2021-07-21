import cookieParser from 'cookie-parser';
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import cors from 'cors'

const app = express();

const URL = process.env.NUXT_ENV_SUPABASE_URL;
const KEY = process.env.NUXT_ENV_SUPABASE_KEY;

const supabase = createClient(URL, KEY);

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.post('/auth', async (req, res) => {
  await supabase.auth.api.setAuthCookie(req, res);
});

app.post('/user', async (req, res) => {
  try {
    const user = await supabase.auth.api.getUserByCookie(req);
    res.json(user);
  } catch (error) {
    console.error('Error: ', error);
    res
      .status(500)
      .send('Failed to get user');
  }
});

module.exports = app;