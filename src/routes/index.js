import { Router } from "express"
const router = Router()

//Enrutamiento
router.get('/', (req, res) => res.render('index', { title: 'Bienvenido - Home'}))
router.get('/about', (req, res) => res.render('about', { title: 'About'}))
router.get('/skills', (req, res) => res.render('skills', { title: 'skills'}))
router.get('/projects', (req, res) => res.render('projects', { title: 'projects'}))
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact'}))

export default router 