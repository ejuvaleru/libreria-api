import Editorial from '../models/editorial.model';


// Seleccionar todos las editoriales
export async function getEditoriales(req, res) {
    try {
        const editoriales = await Editorial.findAll();
        res.json({
            data: editoriales,
        });
    } catch (e) {
        console.log(e);
    }
}