'INC'

'-  18 years of age and older'

'-  eq(val("18"), temporal_unit(YEAR), op(GTEQ))'

age()
    .num_filter(
        eq(val("18"), temporal_unit(YEAR), op(GTEQ))
    )