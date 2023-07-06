'EXC'

'-  Concomitant Aortic Stenosis which is associated with an acquired von Willebrand Syndrome ( aVWS )'

'-  mod("Concomitant") cond("Aortic Stenosis") which is associated with an cond("acquired von Willebrand Syndrome") ( cond("aVWS") )'

intersect(
    cond("Aortic Stenosis")
        .mod("Concomitant"),
    cond("acquired von Willebrand Syndrome")
        .equiv(
            cond("aVWS")
        )
)