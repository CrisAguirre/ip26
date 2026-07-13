$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$sel = $word.Selection

$sel.Font.Name = "Calibri"
$sel.Font.Size = 11

$sel.ParagraphFormat.Alignment = 1
$sel.Font.Size = 26
$sel.Font.Bold = $true
$sel.TypeText("Galeria de Innovaciones Didacticas")
$sel.TypeParagraph()
$sel.Font.Size = 14
$sel.Font.Bold = $false
$sel.TypeText("IND169 - Actividad 2")
$sel.TypeParagraph()
$sel.Font.Size = 11
$sel.TypeText("Universidad de Cartagena - Julio 2026")
$sel.TypeParagraph()
$sel.ParagraphFormat.Alignment = 0
$sel.TypeParagraph()
$sel.TypeParagraph()

function Add-Section($title) {
    $sel.Font.Size = 16; $sel.Font.Bold = $true
    $sel.TypeText($title); $sel.TypeParagraph()
    $sel.Font.Size = 11; $sel.Font.Bold = $false
}

function Add-Para($text) {
    $sel.TypeText($text); $sel.TypeParagraph()
}

function Add-Table($headers, $rows) {
    $table = $sel.Tables.Add($sel.Range, $rows.Count + 1, $headers.Count)
    $table.Borders.InsideLineStyle = 1
    $table.Borders.OutsideLineStyle = 1
    for ($c = 0; $c -lt $headers.Count; $c++) {
        $cell = $table.Cell(1, $c + 1)
        $cell.Range.Font.Bold = $true; $cell.Range.Font.Size = 10
        $cell.Range.Text = $headers[$c]
    }
    for ($r = 0; $r -lt $rows.Count; $r++) {
        for ($c = 0; $c -lt $rows[$r].Count; $c++) {
            $cell = $table.Cell($r + 2, $c + 1)
            $cell.Range.Font.Size = 10
            $cell.Range.Text = $rows[$r][$c]
        }
    }
    $sel.TypeParagraph()
}

Add-Section("1. Descripcion General de la Pagina Web")
Add-Para("La Galeria de Innovaciones Didacticas es una SPA desarrollada con Angular 16 que funciona como un museo interactivo de cuatro proyectos de innovacion educativa. Combina TypeScript, CSS Animations y figuras dibujadas completamente en CSS (sin imagenes externas) para crear una experiencia visual inmersiva.")
Add-Para("Navegabilidad:")
Add-Para("  Ruta '/' - Galeria principal: muestra cuatro tarjetas tematicas (espacio, puzzle, juego, engranaje). La primera tarjeta (InnGenius) aparece destacada a ancho completo centrada, y las otras tres debajo en fila de 3 columnas. Cada tarjeta tiene 500px de altura, efectos 3D de inclinacion, brillo que sigue al mouse y ondas al hacer clic.")
Add-Para("  Ruta '/experiencia/:id' - Detalle de galeria: presenta las 7 piezas de cada investigacion en un grid responsive. Cada pieza muestra icono, titulo, subtitulo, vista previa del contenido y etiquetas. Al hacer clic se abre un visor modal inmersivo con fondo tematico (nebulosa, circuito, CRT, mecanico) segun la galeria.")
Add-Para("  Modal viewer: diseno lado a lado con el texto a la izquierda y una figura CSS unica (130x130px) a la derecha, relacionada con el contenido especifico de cada pieza. Las figuras entran con animacion de rebote y tienen glow pulsante. El texto tambien tiene animaciones de entrada escalonadas (titulo con barrido, contenido con revelado horizontal, tags con pop rebotado).")
Add-Para("La pagina utiliza 28 figuras CSS unicas (una por pieza), con animaciones especificas que reflejan el contenido de cada una. Cada galeria tiene su propio esquema de color definido por la propiedad CSS '--accent'. Los fondos del visor incluyen particulas flotantes y anillos orbitales animados.")

Add-Section("2. InnGenius (Tema: Espacio)")
Add-Para("Metodologia colombiana de innovacion educativa basada en Design Thinking, implementada en 6 paises.")
Add-Table @("#", "Pieza", "Descripcion", "Figura CSS") @(
    @("1", "Contexto educativo", "Bogota, Colegio Santa Francisca Romana, 6 paises", "Edificio escolar con estrellas orbitales"),
    @("2", "Enfoque pedagogico", "Aprendizaje experiencial, constructivismo, Ausubel", "Constelacion de 5 nodos formando cerebro"),
    @("3", "Metodologia activa", "Design Thinking 5 etapas, prototipado", "Cohete multi-etapa con llama vibrante"),
    @("4", "Uso de TIC", "Plataformas colaborativas, baja conectividad", "Satelite con paneles solares y antena"),
    @("5", "Aportes innovadores", "Metodologia colombiana global, Chile", "Supernova: nucleo pulsante con 3 anillos"),
    @("6", "Impacto global", "100+ instituciones, 50.000+ estudiantes", "Globo terraqueo con 6 orbitadores"),
    @("7", "Linea de tiempo", "2021 a 2025, de piloto a 6 paises", "5 nodos conectados en linea (2021-2025)")
)

Add-Section("3. Biobots (Tema: Puzzle)")
Add-Para("Programa de pensamiento computacional para zonas rurales sin internet, basado en gamificacion analogica.")
Add-Table @("#", "Pieza", "Descripcion", "Figura CSS") @(
    @("1", "Contexto educativo", "Zonas rurales Colombia, sin internet", "Casa rural con pieza puzzle en techo"),
    @("2", "Enfoque pedagogico", "Construccionismo (Papert), gamificacion", "4 piezas puzzle formando cerebro"),
    @("3", "Metodologia activa", "Juego de mesa 5 fases, fichas", "Tablero con 5 casillas + ficha"),
    @("4", "Uso de TIC", "No requiere TIC, funciona offline", "Monitor con piezas puzzle en pantalla"),
    @("5", "Aportes innovadores", "Baja tecnologia/alto impacto", "Trofeo puzzle con glow dorado"),
    @("6", "Premios 2025", "GamiCon48V USA (Best Overall)", "Medalla con estrella giratoria + cintas"),
    @("7", "Impacto en cifras", "700 docentes, 14.000 estudiantes", "Grafico de barras + piezas flotantes")
)

Add-Section("4. Eutopia (Tema: Game)")
Add-Para("Plataforma de gamificacion educativa con evaluacion automatizada, alineada con LOMLOE y ODS.")
Add-Table @("#", "Pieza", "Descripcion", "Figura CSS") @(
    @("1", "Contexto educativo", "Sistema educativo espanol, LOMLOE, 40+ centros", "Pixel-art school con pixeles que parpadean"),
    @("2", "Enfoque pedagogico", "Gamificacion + ABP + Flow (Csikszentmihalyi)", "Medidor de flow con aguja oscilante"),
    @("3", "Metodologia activa", "Videojuego simulacion aldea virtual, ODS", "Aldea con 3 casas + arbol"),
    @("4", "Uso de TIC", "Cloud + Big Data + Learning Analytics", "Nube cloud + 3 datos que flotan"),
    @("5", "Aportes innovadores", "Evaluacion automatizada, 15h recuperadas", "Corona real con gema pulsante"),
    @("6", "Crecimiento", "2022 a 2025, 5 a 40+ colegios, 300%", "Barra XP + 3 estrellas level-up"),
    @("7", "Inversion", "Lanzadera (Juan Roig), 500.000 euros+", "Cofre del tesoro + 3 monedas que saltan")
)

Add-Section("5. InnGenius - Investigacion (Tema: Engranaje)")
Add-Para("Fundamentos teoricos y metodologicos del modelo InnGenius, desde el pensamiento creativo hasta la prospectiva docente.")
Add-Table @("#", "Pieza", "Descripcion", "Figura CSS") @(
    @("1", "Pensamiento Creativo", "Menchen (2001), PISA 2022", "Cerebro con engranaje central giratorio"),
    @("2", "Design Thinking 1-2", "Empatizar + Definir", "Diamante doble con puntos laterales"),
    @("3", "Design Thinking 3-4", "Idear + Prototipar", "3 engranajes interconectados"),
    @("4", "Design Thinking 5", "Evaluar/Testear, ciclo continuo", "Circulo feedback + 2 flechas + gear"),
    @("5", "Conectivismo y TIC", "Siemens (2006), constructivismo", "Red de 5 nodos con conexiones"),
    @("6", "Aportes Innovadores", "Engranaje de innovacion K-12", "Sistema de 4 engranajes con spin"),
    @("7", "Reflexion y Prospectiva", "Docente facilitador, divergente", "Libro con engranaje interior giratorio")
)

Add-Section("6. Conclusion")
Add-Para("La Galeria de Innovaciones Didacticas demuestra como una aplicacion web Angular 16 puede combinar contenido academico significativo con diseno visual interactivo. Las 28 figuras CSS unicas, cada una vinculada al contenido especifico de su pieza, transforman la navegacion en una experiencia museistica inmersiva donde la forma y el contenido se refuerzan mutuamente. El uso de animaciones CSS puras, sin dependencia de imagenes externas, garantiza un rendimiento optimo y una experiencia visual coherente en todos los dispositivos.")

$tempPath = "$env:TEMP\informe-galerias-innovacion.docx"
$doc.SaveAs([ref]$tempPath, [ref]16)
$doc.Close()
$word.Quit()

$finalPath = Join-Path -Path $PSScriptRoot -ChildPath "informe-galerias-innovacion.docx"
Copy-Item -LiteralPath $tempPath -Destination $finalPath -Force
Remove-Item -LiteralPath $tempPath -Force

Write-Output "Documento creado exitosamente en: $finalPath"
